import { FunctionalComponent, h } from '@stencil/core';

interface NRenderProps {
  row: Array<any>;
  renderFun: Function;
}

export const Nrender:FunctionalComponent<NRenderProps> = ({ row, renderFun }) => { 
  console.log('renderFun', renderFun(row));
  console.log('row', row); 
  // const parser = new DOMParser();
  const template = document.createElement('template');
  template.innerHTML = renderFun(row);

  return (
    <div innerHTML={renderFun(row)}>
      {/* {parser.parseFromString('<div>Stencil</div>', 'text/html').body}; */}
      {/* {template.content} */}
      {/* {renderFun(row)} */}
    </div>
  )
};