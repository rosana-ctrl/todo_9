import React, {useEffect, useState} from 'react'
import DisplayProduct from '../DisplayProduct/DisplayProduct'
import Form from '../Form/Form'
import Button from '../Button/Button'
import S from "./Main.module.css"
import Description from '../Description/Description'
import FormFriend from '../FormFriend/FormFriend'

let page = 1
let productsList = []

const Main = () => {
    const [products, setProducts] = useState([])
    
    async function handleRequisicao(){
        const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`
        const response = await fetch(url)
        const json = await response.json()
        
        if (json.products) {
            productsList = productsList.concat(json.products)
        }
        console.log(productsList)
        setProducts(productsList)
    }

    function nextPage(){
        page++ 
        handleRequisicao()
    }

    useEffect(() => {
        handleRequisicao()
    }, [])

  return (
   <main className={S.main}>
   <section className={S.secText}>
    
    <Description></Description>
    
    <Form></Form>
    </section>
    <section className={S.secEsp}>
       <hr></hr>
    <h3>Sua seleção especial!</h3>
    <hr></hr>
    </section>
   
<section className={S.secDisplay}>
    {products.map((item, index) => {
        return <DisplayProduct img={item.image} nome={item.name} descr={item.description} oldPrice={item.oldPrice} price={item.price} 
        installmentsCount={item.installments.count} installmentsValue={item.installments.value}
    key = {index} ></DisplayProduct>
    })}
</section>

    <section>
        <Button onClick={nextPage} style={S.btn} text="Ainda mais produtos aqui!"></Button>    
    </section>

    <section className={S.secShare}>
    <hr></hr>
    
    <h3>Compartilhe a novidade</h3>
    <hr></hr>
    
    </section>
    <section>
        <h4 className={S.h4Section}>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</h4>
        <FormFriend></FormFriend>
    </section>
    </main>
  )
}

export default Main