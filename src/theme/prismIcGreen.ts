import type { PrismTheme } from 'prism-react-renderer';

const background = '#2c2c2c';
const foreground = '#e0f1dc';
const comment = '#7e9a72';
const punctuation = '#a8b8a0';
const keyword = '#2ec3b9';
const string = '#aefb86';
const number = '#dafa87';
const functionName = '#3cfac8';
const className = '#dafa87';
const tag = '#ff2736';
const attribute = '#47fa6b';

const prismIcGreen: PrismTheme = {
  plain: {
    color: foreground,
    backgroundColor: background,
  },
  styles: [
    { types: ['comment', 'prolog', 'cdata'], style: { color: comment, fontStyle: 'italic' } },
    { types: ['punctuation'], style: { color: punctuation } },
    { types: ['keyword', 'selector', 'changed', 'rule', 'important', 'atrule'], style: { color: keyword } },
    { types: ['operator', 'entity', 'url', 'variable'], style: { color: foreground } },
    { types: ['string', 'char', 'attr-value', 'inserted', 'regex'], style: { color: string } },
    { types: ['number', 'boolean', 'constant', 'symbol'], style: { color: number } },
    { types: ['function', 'function-name', 'method'], style: { color: functionName } },
    { types: ['class-name', 'builtin', 'maybe-class-name'], style: { color: className } },
    { types: ['tag', 'deleted'], style: { color: tag } },
    { types: ['attr-name', 'property', 'keyword-control'], style: { color: attribute } },
    { types: ['namespace'], style: { opacity: 0.7 } },
  ],
};

export default prismIcGreen;
