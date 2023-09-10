let customCodeBlockNO = 1;

editor.on('component:selected', () => {

	// whenever a component is selected in the editor

	// set your command and icon here
	const commandToAdd = 'tlb-addcomp';
	const commandIcon = 'fa fa-plus';

	// get the selected componnet and its default toolbar
	const selectedComponent = editor.getSelected();
	const defaultToolbar = selectedComponent.get('toolbar');

	// check if this command already exists on this component toolbar
	const commandExists = defaultToolbar.some(item => item.command === commandToAdd);

	// if it doesn't already exist, add it
	if (!commandExists) {
		selectedComponent.set({
			toolbar: [...defaultToolbar, { attributes: { class: commandIcon }, command: commandToAdd }]
		});
	}

	// Add new trait
	const component = editor.getSelected();
	component.addTrait({
		name: 'type',
		type: 'mt'
	}, { at: 0 });
	// The `at` option indicates the index where to place the new trait,
	// without it, the trait will be appended at the end of the list

	// Remove trait
	// component.removeTrait('type');
});

let CBAddBlock = (lbl, md, hl) => {
	editor.BlockManager.add('Custom Block' + customCodeBlockNO.toString(), {
		label: lbl,
		media: md,
		content: hl,
	})
}

editor.Commands.add('tlb-addcomp', {
	run(editor, sender, options = {}) {
		editor.Modal.open({
			title: 'Enter Content',
			content: '\
			<div>Block Title: <input type="text" name="" id="GJSCBBT" value="Custom Block' + customCodeBlockNO.toString() + '"></div>\
			<div>Block Icon/Fontawesome class: <input type="text" name="" id="GJSCBBI" value=""></div>\
			<button oncick(()={\
				console.log("foo") \
				document.querySelector("#GJSCBBT").value = "Custom Block' + customCodeBlockNO.toString() + ';"\
				document.querySelector("#GJSCBBI").value = "";\
				editor.Modal.close();\
				CBAddBlock(document.querySelector("#GJSCBBT").value, document.querySelector("#GJSCBBI").value, editor.getSelected().toHTML());})>Submit</button>',
			attributes: {}
		})
		customCodeBlockNO++;
	}
})