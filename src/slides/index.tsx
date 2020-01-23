/**
 * Add your slides in the following array. 
 * They are displayed in the order used there.
 */
const files = [
    'slide01.tsx',
    'slide02.tsx'];

const slideComponents = files.map((filename) => require(`./${filename}`).default);

export default slideComponents;
