/* main page - JS */
const reset_btn= document.getElementById("reset");
const reset=()=>{
    const checkboxes=document.querySelectorAll("input[type='checkbox'][name='group']")
    checkboxes.forEach((checkbox)=>{
        checkbox.checked=false;
        filter.style.display='none';
        skin_filter.style.display='none';
        luxury_filter.style.display='none';
        snack_filter.style.display='none';
        })
}

const total = document.getElementById('total');
const update_total_product=()=>{
    let total_num=0;
    const checkboxes = document.querySelectorAll("input[type='checkbox'][name='group']:checked");
    checkboxes.forEach((checkbox)=>{
        total_num += parseInt(checkbox.getAttribute('value'));
    })
    total.textContent=`총 ${total_num}건`;
}
reset_btn.addEventListener('click',reset);
reset_btn.addEventListener('click',update_total_product);

const filter=document.getElementById("filter");

const skin_checkbox=document.getElementById("skin");
const skin_filter=document.getElementById("skin_text");
const skinfilter=()=>{
    const ischecked=document.querySelectorAll("input[type='checkbox'][name='group']:checked")
        if(skin_checkbox.checked){
            skin_filter.style.display='flex';
            skin_filter.style.alignItems='center';
            filter.style.display='flex';
            filter.style.alignItems='center';
        }   
        else{
            skin_filter.style.display='none';
        }
        if(ischecked.length==0){
            filter.style.display='none';
        } 
    }
skin_checkbox.addEventListener('change',skinfilter);
skin_checkbox.addEventListener('change',update_total_product);

const luxury_checkbox=document.getElementById("luxury");
const luxury_filter=document.getElementById("luxury_text");
const luxuryfilter=()=>{
    const ischecked=document.querySelectorAll("input[type='checkbox'][name='group']:checked")
        if(luxury_checkbox.checked){
            luxury_filter.style.display='flex';
            luxury_filter.style.alignItems='center';
            filter.style.display='flex';
            filter.style.alignItems='center';
        }  
        else{
            luxury_filter.style.display='none';
        }
        if(ischecked.length==0){
            filter.style.display='none';
        } 
    }
luxury_checkbox.addEventListener('change',luxuryfilter);
luxury_checkbox.addEventListener('change',update_total_product);

const snack_checkbox=document.getElementById("snack");
const snack_filter=document.getElementById("snack_text");
const snackfilter=()=>{
    const ischecked=document.querySelectorAll("input[type='checkbox'][name='group']:checked")
        if(snack_checkbox.checked){
            snack_filter.style.display='flex';
            snack_filter.style.alignItems='center';
            filter.style.display='flex';
            filter.style.alignItems='center';
        }   
        else{
            snack_filter.style.display='none';
        }
        if(ischecked.length==0){
            filter.style.display='none';
        } 
    }
snack_checkbox.addEventListener('change',snackfilter);
snack_checkbox.addEventListener('change',update_total_product);

const filter_skincarebtn=document.getElementById("skin_deletebtn");
const category_skin_delete=document.getElementById("skin")
const delete_skinfilter=()=>{
    category_skin_delete.checked=false;
}
filter_skincarebtn.addEventListener('click',delete_skinfilter);
filter_skincarebtn.addEventListener('click',skinfilter);
filter_skincarebtn.addEventListener('click',update_total_product);

const filter_luxurybtn=document.getElementById("luxury_deletebtn");
const category_luxury_delete=document.getElementById("luxury")
const delete_luxuryfilter=()=>{
    category_luxury_delete.checked=false;
}
filter_luxurybtn.addEventListener('click',delete_luxuryfilter);
filter_luxurybtn.addEventListener('click',luxuryfilter);
filter_luxurybtn.addEventListener('click',update_total_product);

const filter_snackbtn=document.getElementById("snack_deletebtn");
const category_snack_delete=document.getElementById("snack")
const delete_snackfilter=()=>{
    category_snack_delete.checked=false;
}
filter_snackbtn.addEventListener('click',delete_snackfilter);
filter_snackbtn.addEventListener('click',snackfilter);
filter_snackbtn.addEventListener('click',update_total_product);