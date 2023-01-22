
import { saveWebsite } from '../firebase/store'

export default function Form() {
    const handelSubmit =(e)=>{
        e.preventDefault()
        const img= e.target.elements.img.value.trim()
        const url = e.target.elements.url.value.trim()
        const name = e.target.elements.name.value.trim()
        saveWebsite({img, name, url})
    }
  return (
    <div>
        <form onSubmit={handelSubmit}>
            <input type='text' name='img' />
            <input type='text' name='url' />
            <input type='text'  name='name'/>
            <button>save</button>
        </form>
    </div>
  )
}
