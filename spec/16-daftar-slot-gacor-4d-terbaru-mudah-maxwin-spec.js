'use babel';

import 16DaftarSlotGacor4dTerbaruMudahMaxwin from '../lib/16-daftar-slot-gacor-4d-terbaru-mudah-maxwin';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('16DaftarSlotGacor4dTerbaruMudahMaxwin', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('16-daftar-slot-gacor-4d-terbaru-mudah-maxwin');
  });

  describe('when the 16-daftar-slot-gacor-4d-terbaru-mudah-maxwin:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.16-daftar-slot-gacor-4d-terbaru-mudah-maxwin')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, '16-daftar-slot-gacor-4d-terbaru-mudah-maxwin:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.16-daftar-slot-gacor-4d-terbaru-mudah-maxwin')).toExist();

        let 16DaftarSlotGacor4dTerbaruMudahMaxwinElement = workspaceElement.querySelector('.16-daftar-slot-gacor-4d-terbaru-mudah-maxwin');
        expect(16DaftarSlotGacor4dTerbaruMudahMaxwinElement).toExist();

        let 16DaftarSlotGacor4dTerbaruMudahMaxwinPanel = atom.workspace.panelForItem(16DaftarSlotGacor4dTerbaruMudahMaxwinElement);
        expect(16DaftarSlotGacor4dTerbaruMudahMaxwinPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, '16-daftar-slot-gacor-4d-terbaru-mudah-maxwin:toggle');
        expect(16DaftarSlotGacor4dTerbaruMudahMaxwinPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.16-daftar-slot-gacor-4d-terbaru-mudah-maxwin')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, '16-daftar-slot-gacor-4d-terbaru-mudah-maxwin:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let 16DaftarSlotGacor4dTerbaruMudahMaxwinElement = workspaceElement.querySelector('.16-daftar-slot-gacor-4d-terbaru-mudah-maxwin');
        expect(16DaftarSlotGacor4dTerbaruMudahMaxwinElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, '16-daftar-slot-gacor-4d-terbaru-mudah-maxwin:toggle');
        expect(16DaftarSlotGacor4dTerbaruMudahMaxwinElement).not.toBeVisible();
      });
    });
  });
});
