Hooks.once('init', () => { 
	if(typeof Babele !== 'undefined') { 
		Babele.get().register({
			module: 'traducao-compendium-shadowdark-ptbr',
			lang: 'pt-BR',
			dir: 'compendium'
		}); 
	}
});
