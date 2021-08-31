

        const inputCal = document.querySelector('.inputCal');
        const inputCalButton = document.querySelector('.inputCalButton');
        const ansVal = document.querySelector('.ansVal');
        inputCalButton.addEventListener('click', () => {
                const inputVal = parseInt(inputCal.value);
                const price = document.querySelector('.priceInput');
                const priceVal = parseInt(price.value);                
                const output = Math.floor((1000 / priceVal) * inputVal);
                if (output >= 1000) {
                    ansVal.innerText = `${Math.round((1000 / priceVal) * inputVal) / 1000} Kg`;                    
                } else {
                    ansVal.innerText = `${Math.round((1000 / priceVal) * inputVal)} g`;                    
                } if(inputCal.value == '' || price.value == '' ){                   
                    ansVal.innerText = '!';
                }
            })
            // ________________________CAL2
        const inputCalButton2 = document.querySelector('.cal2 button');
        const inputK = document.querySelector('.inputKg');
        const inputG = document.querySelector('.inputGm');
        const outputRs = document.querySelector('.outputRs span');
        inputCalButton2.addEventListener('click', () => {
            const price = document.querySelector('.priceInput');
            let inputKVal = parseInt(inputK.value);            
            let inputGVal = parseInt(inputG.value);
            const priceVal = parseInt(price.value);
            const totalInGrams = ((inputK.value === '' ? inputKVal = 0 : inputKVal) * 1000) + (inputG.value === '' ? inputGVal = 0 : inputGVal);
            outputRs.innerText = `${Math.round((priceVal/1000)*totalInGrams)}`;           
            if((inputK.value == '' && inputG.value == '') || price.value == '' ){                   
                outputRs.innerText = '!';
            }

        })
