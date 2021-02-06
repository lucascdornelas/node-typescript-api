import * as path from 'path';
import moduleAlias from 'module-alias';

/* do diretorio atual, volta duas pastas para importar os arquivos */
const files = path.resolve(__dirname, '../..');

/* adiciona o module-alias em src e test */
moduleAlias.addAliases({
    '@scr': path.join(files, 'src'),
    '@test': path.join(files, 'test')
})

/* 
   module-alias serve para resolver o problema de importação de arquivos,
   com ele fica mais legível. Agora temos uma 'variável' para a pasta src
   e test, chamando @src ou @test acessamos essa pasta de qualquer arquivo.
*/