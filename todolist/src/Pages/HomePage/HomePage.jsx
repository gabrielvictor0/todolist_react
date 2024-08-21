import { useEffect, useState } from 'react';
import Background from '../../Components/Background/Background';
import Card from '../../Components/Card/Card';
import '../HomePage/HomePage.css'
import Modal from 'react-modal'
Modal.setAppElement('#root')

const Home = () => {
    const [modaIsOpen, setModalIsOpen] = useState(false)
    const [modalEditIsOpen, setModalEditIsOpen] = useState(false)
    const [activeSearch, setActiveSearch] = useState(false)
    var [array, setArray] = useState([])
    const [text, setText] = useState("")
    const [textEdit, setTextEdit] = useState("")
    const [idxItem, setIdxItem] = useState(null)
    const date = new Date()
    const dayWeek = date.toLocaleString('default', { weekday: 'long' })
    const day = date.toLocaleString('default', { day: 'numeric' })
    const month = date.toLocaleString('default', { month: 'long' })
    const [searchedItem, setSearchedItem] = useState([])
    const [textSearch, setTextSearch] = useState("")

    function removeItem(txt) {
        var indice = array.indexOf(txt)
        var newArray = array.filter((i) => i != txt)
        setTextSearch("")
        setArray(newArray)
        setSearchedItem(newArray)
        setActiveSearch(false)
    }
    function findItem(txt) {

        var indiceEdit = array.indexOf(txt)
        setIdxItem(indiceEdit)
        setModalEditIsOpen(true)


    }

    function editItem() {
        var idx = array.indexOf(textEdit)
        if (idx == -1) {
            if (textEdit != "") {
                
                setTextSearch(textEdit)
                array[idxItem] = textEdit
                setTextSearch("")
                setActiveSearch(false)
            }
        }
    }

    function searchItem() {
        setActiveSearch(true)
        var idx = array.indexOf(textSearch)
        if (idx != null) {
            setSearchedItem([array[idx]])
        }
        if (textSearch == "") {
            alert("desativa pesquisa")
            setActiveSearch(false)
        }

    }

    return (
        <section>
            <div className='boxCardButton'>

                <Background >

                    <div>
                        <h1 className='weekMonth'>{dayWeek}, <span className='day'>{day}</span> de {month}</h1>
                    </div>

                    <input className='inputFilter' onBlur={() => searchItem()} type="text" placeholder='Procurar tarefa' value={textSearch} onChange={(txt) => {
                        setTextSearch(txt.target.value)
                    }} />
                    {
                        activeSearch ?
                            searchedItem.map((txt) => {
                                if (txt != null || txt != undefined) {
                                    return (


                                        <Card onClickEdit={() => findItem(txt)} onClick={() => removeItem(txt)} text={txt} />
                                    )
                                }
                                else {
                                    return <p className='errorSearch'>Tarefa não encontrada</p>;
                                }
                            })
                            :
                            array.map((txt) => {
                                return (
                                    <Card onClickEdit={() => findItem(txt)} onClick={() => removeItem(txt)} text={txt} />
                                )
                            })
                    }

                </Background>

                <Modal className="modal" isOpen={modalEditIsOpen}>
                    <h1 className='titleModal'>Editando tarefa</h1>
                    <input className='inputModal' type="text" onChange={(txt) => {
                        setTextEdit(txt.target.value)
                    }} />
                    <button className='buttonModal' onClick={() => { setModalEditIsOpen(false); editItem() }}>Editar</button>
                </Modal>

                <Modal isOpen={modaIsOpen} className="modal">
                    <h1 className='titleModal'>Descreva sua tarefa</h1>
                    <input className='inputModal' type="text" onChange={(txt) => {
                        setText(txt.target.value)
                    }} />
                    <button className='buttonModal' onClick={() => { setModalIsOpen(false); setArray([...array, text]); setText(" ") }}>Confirmar tarefa</button>
                </Modal>

                <button className='buttonHome' onClick={() => setModalIsOpen(true)}>
                    Nova tarefa
                </button>
            </div>

        </section>
    )
}

export default Home;