import React, { useState, useEffect } from 'react'
import { functions, get } from 'lodash'
import styled, { css, keyframes } from 'styled-components'

function Test() {
    const [member, setMember] = useState(false)
    const [userMenu, setUserMenu] = useState([])
    const [amountTotal, setAmountTotal] = useState(0)
    const [promotion, setPromotion] = useState(false)
    const [amountDiscount, setAmountDiscount] = useState(0)


    const [menu, setMenu] = useState([
        {
            id: '1',
            title: 'Red Set',
            price: 50,
            quantity: 1

        },
        {
            id: '2',
            title: 'Green Set',
            price: 40,
            quantity: 1

        },
        {
            id: '3',
            title: 'Blue Set',
            price: 30,
            quantity: 1


        },
        {
            id: '4',
            title: 'Yellow Set',
            price: 50,
            quantity: 1

        },
        {
            id: '5',
            title: 'Pink set',
            price: 80,
            quantity: 1
        },
        {
            id: '6',
            title: 'Purple set',
            price: 90,
            quantity: 1

        },
        {
            id: '7',
            title: 'Orange set',
            price: 120,
            quantity: 1
        },
    ])

    let array = []
    let AraayFood = []

    const addOnMenu = (item) => {

        const eiei = userMenu
        const array1 = [...eiei, item]

        const _unique = array1.filter(
            (value, index) =>
                array1.findIndex((obj) => obj.id === value.id) === index
        );
        const c = _unique.map((value) => {
            return Object.assign({}, value, {
                quantity: array1
                    .filter((f) => f.id == value.id)
                    .reduce((accu, curr) => accu + curr.quantity, 0),
            });
        });

        let _amount_total = c.reduce(
            (accu, curr) => accu + curr.price * curr.quantity,
            0
        );
        setAmountTotal(_amount_total)
        setUserMenu(c)
    }

    function getPrice(price) {
        let sum = price
        if (member) {
            if (member && promotion) {
                sum = price - (price * 0.1) - (price * 0.05)
            }
            else {
                sum = price - (price * 0.1)
            }
        }
        else {
            if (promotion) {
                sum = price - (price * 0.05)
            }
        }
        return sum
    }



    useEffect(() => {

        const isPink = userMenu.find(obj => {
            return obj.title == 'Pink set'
        })

        const isOrange = userMenu.find(obj => {
            return obj.title == 'Orange set'
        })

        const isGreen = userMenu.find(obj => {
            return obj.title == 'Green set'
        })

        if (isPink?.quantity > 1 || isOrange?.quantity > 1 || isGreen?.quantity > 1) {
            setPromotion(true)
            console.log('if')
        }
        else {
            setPromotion(false)
            console.log('else')

        }
    }, [userMenu])

    return (
        <Wrapper>
            <div>Calculator</div>
            <div data-menu="item">
                {
                    menu.map((item, i) => {
                        return (
                            <div data-menu="boxs" key={`item-${i}`} onClick={() => addOnMenu(item)}>
                                {item.title}
                            </div>
                        )
                    })
                }
            </div>
            <div style={{ marginTop: '40px' }}>
                <div>Your Menu</div>
                <div data-menu="item-menu-discount">
                    {
                        userMenu?.map((item, i) => {
                            return (
                                <div key={`menu-${i}`} data-menu="menu-item">
                                    <div data-menu="menu-item-1">{item.title}</div>
                                    <div data-menu="menu-item-2">{item.quantity}</div>
                                    <div data-menu="menu-item-3">{item.price}</div>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    member &&
                    <div data-menu="item-menu">
                        <div data-menu="menu-item">
                            <div data-menu="menu-item-1">ส่วนลกของคุณ</div>
                            <div data-menu="menu-item-2"></div>
                            <div data-menu="menu-item-3-green">{`10%`}</div>
                        </div>
                    </div>
                }
                {
                    promotion &&
                    <div data-menu="item-menu">
                        <div data-menu="menu-item">
                            <div data-menu="menu-item-1">โปรชั่น</div>
                            <div data-menu="menu-item-2"></div>
                            <div data-menu="menu-item-3-green">{`5%`}</div>
                        </div>
                    </div>
                }


                <div>
                    <input type="checkbox" value={member} onClick={() => setMember(!member)} />
                    เป็นสมาชิก
                </div>

                <div data-menu="item-menu-top">
                    <div data-menu="menu-item">
                        <div data-menu="menu-item-1">ราคาทั้งหมด</div>
                        <div data-menu="menu-item-2"></div>
                        <div data-menu="menu-item-3">{getPrice(amountTotal)}</div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export const Wrapper = styled.div`
    max-width: 540px;
    margin: auto;
    padding: 20px 0;
    [data-menu="item"]
    {
        display: grid;
        gap:20px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    [data-menu="boxs"]
    {
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid gray;
        cursor: pointer;
    }

    [data-menu="item-menu"]
    {
        max-width: 320px;
        display: grid;
    }

    [data-menu="item-menu-top"]
    {
        max-width: 320px;
        display: grid;
        margin-top: 20px;
    }

    [data-menu="item-menu-discount"]
    {
        max-width: 320px;
        display: grid;
        margin-bottom: 20px;
    }

    [data-menu="menu-item"]
    {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    [data-menu="menu-item-1"]
    {
        width: 60%;
    }
    [data-menu="menu-item-2"]
    {
        width: 20%;
    }
    [data-menu="menu-item-3"]
    {
        width: 20%;
    }
    [data-menu="menu-item-3-green"]
    {
        width: 20%;
        color:green;
    }
`

export default Test