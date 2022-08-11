import fs from 'fs';
import {compile, nodeTypes} from '@mdx-js/mdx';
import remarkShikiTwoslash from 'remark-shiki-twoslash';
import rehypeRaw from 'rehype-raw';

(async() => {
  const { value } = await compile(fs.readFileSync('./ex.mdx'), {
    jsx: true,
    remarkPlugins: [[remarkShikiTwoslash.default ?? remarkShikiTwoslash]],
    rehypePlugins: [rehypeRaw, {passthrough: nodeTypes}],
  })
  
  console.log(value)
  console.log('---')
  console.log('☝️ Note that `<_components.data-lsp>` is inserted, which is not valid JSX!')
})()