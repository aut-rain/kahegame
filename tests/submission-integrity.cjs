const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const root=process.cwd();let count=0;
function exists(relative){const absolute=path.resolve(root,relative);assert(absolute.startsWith(root+path.sep),'asset outside project: '+relative);assert(fs.statSync(absolute).isFile(),relative);count++;return absolute;}
function checkHash(file,hash){assert.equal(crypto.createHash('sha256').update(fs.readFileSync(exists(file))).digest('hex'),hash,file+' checksum');}
const html=fs.readFileSync('index.html','utf8'),ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length,'unique HTML ids');
for(const m of html.matchAll(/(?:href|src)="([^"]+)"/g)){const value=m[1];if(value&&!/^(?:https?:|data:|#)/.test(value))exists(value.split(/[?#]/)[0]);}
for(const name of fs.readdirSync('src')){if(!name.endsWith('.js'))continue;const code=fs.readFileSync('src/'+name,'utf8');for(const m of code.matchAll(/['"](assets\/[^'"\s]+)['"]/g))exists(m[1]);for(const m of code.matchAll(/from\s+['"](\.\.?\/[^'"]+)['"]/g))exists(path.join('src',m[1]));}
for(const file of ['README.md','docs/SUBMISSION.md','docs/ATTRIBUTION.md']){const text=fs.readFileSync(file,'utf8');for(const m of text.matchAll(/\]\(([^)]+)\)/g))if(!/^(?:https?:|#)/.test(m[1]))exists(path.join(path.dirname(file),m[1]));}
const sources=JSON.parse(fs.readFileSync('assets/sources.json','utf8'));for(const r of [...sources.references,...sources.manuals])checkHash(r.file,r.sha256);
const cards=JSON.parse(fs.readFileSync('assets/cards/sources.json','utf8'));assert.equal(cards.cards.length,8);for(const c of cards.cards)checkHash(c.localImage,c.sha256);
const models=JSON.parse(fs.readFileSync('assets/models/manifest.json','utf8'));assert.equal(models.length,4);for(const m of models){const bytes=fs.readFileSync(exists(m.file));assert.equal(bytes.toString('ascii',0,4),'glTF');assert.equal(bytes.length,m.bytes);exists(m.reference);}
assert(fs.readFileSync('assets/manuals/puzzi-8-1-c.pdf').subarray(0,5).toString()==='%PDF-');assert(fs.readFileSync('assets/THREE-LICENSE.txt','utf8').includes('MIT'));
const bundle=fs.readFileSync('dist/game.js','utf8');assert(bundle.length>100000);assert(html.includes('试玩演示')&&bundle.includes('karcher-story-cards:v1'));assert(bundle.includes('THREE'));
assert(!html.includes('research/'));for(const file of [...fs.readdirSync('src').map(f=>'src/'+f),'index.html','style.css','README.md'])assert(!fs.readFileSync(file,'utf8').includes('/Users/'),'no machine-specific path: '+file);
for(const excluded of ['test-results','research','.idea'])assert(!fs.existsSync(excluded),'development directory excluded: '+excluded);
console.log('PASS submission references, '+count+' file checks, image hashes, four GLB files, PDF, license, unique IDs, no machine paths');
