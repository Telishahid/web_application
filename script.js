document.addEventListener('DOMContentLoaded', function() {
    // Assuming you have an element with the ID 'showFormButton'
    var showFormButton = document.getElementById('showFormButton');

    if (showFormButton) {
        showFormButton.addEventListener('click', function() {
            var form = document.getElementById('billingForm');
            form.style.display = (form.style.display === 'none' || form.style.display === '') ? 'block' : 'none';
        });
    }

    var opposingPartyInfo = document.getElementById('OpposingPartyInfo');
    if (opposingPartyInfo) {
        opposingPartyInfo.addEventListener('click', function() {
            var form = document.getElementById('oppsitefrom');
            form.style.display = (form.style.display === 'none' || form.style.display === '') ? 'block' : 'none';
        });
    }

    var additionalInfo = document.getElementById('Additionalinfo');
    if (additionalInfo) {
        additionalInfo.addEventListener('click', function() {
            var form = document.getElementById('Additional');
            form.style.display = (form.style.display === 'none' || form.style.display === '') ? 'block' : 'none';
        });
    }

    var additionalInfo = document.getElementById('BasicLogistics');
    if (additionalInfo) {
        additionalInfo.addEventListener('click', function() {
            var form = document.getElementById('basic');
            form.style.display = (form.style.display === 'none' || form.style.display === '') ? 'block' : 'none';
        });
    }
    var additionalInfo = document.getElementById('VirtualLogistics');
    if (additionalInfo) {
        additionalInfo.addEventListener('click', function() {
            var form = document.getElementById('Virtual');
            form.style.display = (form.style.display === 'none' || form.style.display === '') ? 'block' : 'none';
        });
    }

    var additionalInfo = document.getElementById('CourtReporting');
    if (additionalInfo) {
        additionalInfo.addEventListener('click', function() {
            var form = document.getElementById('court');
            form.style.display = (form.style.display === 'none' || form.style.display === '') ? 'block' : 'none';
        });
    }


    var additionalInfo = document.getElementById('CourtRep');
    if (additionalInfo) {
        additionalInfo.addEventListener('click', function() {
            var form = document.getElementById('CourtRepo');
            form.style.display = (form.style.display === 'none' || form.style.display === '') ? 'block' : 'none';
        });
    }

        const myButton = document.getElementById('logistics');
        myButton.addEventListener('click', function() {
          window.location.href = 'logistics.html';
        });

        const mybuttom3 = document.getElementById('PartyInformation');
        mybuttom3.addEventListener('click', function() {
          window.location.href = 'index.html';
        });
        const mybuttom2 = document.getElementById('AddtionalService');
        mybuttom2.addEventListener('click', function() {
          window.location.href = 'AddtionalService.html';
        });


     

         


});
