
    let data = 'Lorem ipsum dolor sit amet, AE4574CM consectetur adipiscing elit. Integer varius dictum turpis sit amet dictum. Cras aliquet quis dui vitae suscipit. Mauris felis lorem, TE3589EP dapibus ut libero id, consequat malesuada nunc. Etiam purus tellus, pharetra eu AC45876KH consectetur at, tristique non leo. Maecenas egestas eros ut lacus posuere viverra. Etiam vel ultrices urna. Vestibulum tempus, ligula AH7893Ab eget hendrerit luctus, est nisi BB5686TB dignissim nibh, in euismod ligula mauris eu lorem. Etiam eget pulvinar nisi, ac semper massa. Phasellus ultrices venenatis BB1200CA eleifend. Cras tincidunt suscipit elit a blandit. Nunc AA7744 sodales nisl quis eros dignissim condimentum.';

    let btn = document.querySelector('button');
    let input = document.querySelector('input');

    btn.addEventListener('click', function() {
        console.log(input.checkValidity(),input.validity);
        if(input.checkValidity()){
           input.classList.remove('is-invalid');
           input.classList.add('is-valid');
       }else{
        input.classList.remove('is-valid')
        input.classList.add('is-invalid');
       }
    });