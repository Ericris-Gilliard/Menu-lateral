var menuItem = document.querySelectorAll('.item-menu')


// função para manter a marca azul nos itens do menu

function selectlink(){
    menuItem.forEach((item)=>
       item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}
menuItem.forEach((item)=>
    item.addEventListener('click',selectlink)
)



