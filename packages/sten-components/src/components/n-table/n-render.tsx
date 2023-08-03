import { FunctionalComponent, h } from '@stencil/core';

interface NRenderProps {
  row: Array<any>;
  renderFun: Function;
}

export const Nrender:FunctionalComponent<NRenderProps> = ({ row, renderFun }) => {
  // console.log(row);
  // console.log(renderFun);
  // console.log(renderFun(row));
  // const parser = new DOMParser();
  // const template = document.createElement('template');
  // template.innerHTML = renderFun(row);
  // console.log('template', template);

  return (
    <div innerHTML={renderFun(row)}>
      {/* {parser.parseFromString('<div>Stencil</div>', 'text/html').body}; */}
      {/* {template.content} */}
      {/* {renderFun(row)} */}
    </div>
  )
};