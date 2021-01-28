import QuickPaper from 'quick-paper';

let doit = function (el, binding) {

    if (binding.value == binding.type) {
        el.setAttribute('isactive', 'yes');
    } else {
        el.setAttribute('isactive', 'no');
    }

}

QuickPaper.directive('uiActive', {

    inserted: doit,
    update: doit

});
