

import useMio from '../hooks/useMio'

const Cards = () => {
    let { user,btn } = useMio()
    
    return (
        <>
            <form className='' onSubmit={btn} >
                <div className=''>
                    <input className='' placeholder='Search ...' type="text" id='textNew' />
                </div>
                <button className='' >Search </button>
            </form>

            {  
          
                user.map(user => (
                    <article key={user.email} >
                        <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
                        <h4>{user.email}</h4>
                    </article>
                )) 
            } 
        </>
    )
}

export default Cards