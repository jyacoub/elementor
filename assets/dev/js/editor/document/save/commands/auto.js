import Base from './base/base';

export class Auto extends Base {
	apply( args ) {
		const { force = false } = args;
		let { options } = args;

		if ( ! force && 'edit' !== elementor.channels.dataEditMode.request( 'activeMode' ) ) {
			return;
		}

		if ( this.component.isEditorChanged() ) {
			options = Object.assign( {
				status: 'autosave',
				document: this.document,
			}, options );

			elementor.saver.saveEditor( options );
		}
	}
}

export default Auto;