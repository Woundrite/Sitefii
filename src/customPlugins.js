function EmptyDiv(editor) {
	editor.BlockManager.add('Empty Container', {
		label: 'Container',
		media: '<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" rx="15" width="280" height="280" /></svg>',
		content: '<div class="Container">This is a container</div>',
	});
}

function ScrollAnimate (editor){
	console.log("Foo")
	editor.BlockManager.add("SAContainer", {
		label: 'S.A. Container',
		media: `
         <svg width="54" height="54" xmlns="http://www.w3.org/2000/svg">
        <g id="Layer_1">
         <g id="svg_5" stroke="null">
          <path fill="none" stroke-width="3" opacity="undefined" d="m13.79637,16.23891c0,-7.10116 5.90881,-12.8531 13.20364,-12.8531c7.29483,0 13.20364,5.75194 13.20364,12.8531" id="svg_2" stroke="#ddd"/>
          <path fill="none" stroke-width="3" d="m26.97267,14.14627l0.05466,0l0,0c0.00716,0 0.01297,0.99216 0.01297,2.21605c0,1.22389 -0.0058,2.21605 -0.01297,2.21605l-0.05466,0l0,0c-0.00716,0 -0.01297,-0.99216 -0.01297,-2.21605c0,-1.22389 0.0058,-2.21605 0.01297,-2.21605z" id="svg_13" stroke="#ddd"/>
          <path fill="none" opacity="undefined" d="m13.78428,15.468l0,22.66279" id="svg_6" stroke-width="3" stroke="#ddd"/>
          <line fill="none" x1="40.21572" y1="15.468" x2="40.21572" y2="38.13079" id="svg_7" stroke-width="3" stroke="#ddd"/>
          <path fill="none" stroke-width="3" opacity="undefined" d="m40.20363,37.76109c0,7.10116 -5.90881,12.8531 -13.20364,12.8531c-7.29483,0 -13.20364,-5.75194 -13.20364,-12.8531" id="svg_3" stroke="#ddd"/>
         </g>
        </g>
       </svg>`,
		content: '<div class="OnScrollAnimate">This is a container</div>',
	})
}