Hooks.once('init', () => { 
	if(typeof Babele !== 'undefined') { 
		game.babele().register({
			module: 'traducao-compendium-shadowdark-ptbr',
			lang: 'pt-BR',
			dir: 'compendium'
		}); 
	}
});
