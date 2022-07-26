'use babel';

import 16DaftarSlotGacor4dTerbaruMudahMaxwinView from './16-daftar-slot-gacor-4d-terbaru-mudah-maxwin-view';
import { CompositeDisposable } from 'atom';

export default {

  16DaftarSlotGacor4dTerbaruMudahMaxwinView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.16DaftarSlotGacor4dTerbaruMudahMaxwinView = new 16DaftarSlotGacor4dTerbaruMudahMaxwinView(state.16DaftarSlotGacor4dTerbaruMudahMaxwinViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.16DaftarSlotGacor4dTerbaruMudahMaxwinView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      '16-daftar-slot-gacor-4d-terbaru-mudah-maxwin:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.16DaftarSlotGacor4dTerbaruMudahMaxwinView.destroy();
  },

  serialize() {
    return {
      16DaftarSlotGacor4dTerbaruMudahMaxwinViewState: this.16DaftarSlotGacor4dTerbaruMudahMaxwinView.serialize()
    };
  },

  toggle() {
    console.log('16DaftarSlotGacor4dTerbaruMudahMaxwin was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
