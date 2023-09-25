import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Contra = () => {
    const[nom, setNom]=useState('')
    const[prenom, setPrenom]=useState('')
    const[email, setEmail]=useState('')
    const[telephone, setTelephone]=useState('')
    const[contrat,setContrat]=useState('')
    const [employees, setEmployees]=useState([])

    const updatNom=(event)=>{
        setNom(event.target.value)
    }
    const updatPrenom=(event)=>{
        setPrenom(event.target.value)
    }
    const updatEmail=(event)=>{
        setEmail(event.target.value)
    }
    const updatTelephone=(event)=>{
        setTelephone(event.target.value)
    }
    const updatContrat=(event)=>{
        setContrat(event.target.value)
    }

    const Ajout =async(event)=>{
        event.preventDefault()
        await axios.post('http://localhost:4000/employee',{
          nom:nom,
          prenom:prenom,
          email:email,
          telephone:telephone,
          contrat:contrat 
        })
        setEmployees([...employees,{
            nom:nom,
            prenom:prenom,
            email:email,
            telephone:telephone,
            contrat:contrat
        }])
    }
    const getdata = async ()=>{
      const ras = await axios.get('http://localhost:4000/employee')
      console.log(ras.data)
      setEmployees(ras.data)
    }
    useEffect (()=>{
      getdata()
    },[])

  return (
    <div className='p-10'>
       <h1 className='text-center text-6xl  font-extrabold text-blue-500'>Employees</h1>
       <div className='flex flex-row gap-3'>
       <div className='flex-[0.3] p-10'>
        <h2 className='mx-32 text-lg font-bold '>Formulaire</h2>
        <form>
        <div class="form-control w-full ">
  <label class="label">
    <span class="label-text">Nom</span>   
  </label>
  <input type="text" placeholder="Nom" onChange={updatNom} class="input input-bordered w-full " />
  <label class="label">
  </label>
</div>
<div class="form-control w-full ">
  <label class="label">
    <span class="label-text">Prenom</span>   
  </label>
  <input type="text" placeholder="Prenom" onChange={updatPrenom} class="input input-bordered w-full " />
  <label class="label">
  </label>
</div>
<div class="form-control w-full ">
  <label class="label">
    <span class="label-text">Email</span>   
  </label>
  <input type="text" placeholder="Email" onChange={updatEmail} class="input input-bordered w-full " />
  <label class="label">
  </label>
</div>
<div class="form-control w-full ">
  <label class="label">
    <span class="label-text">Telephone</span>   
  </label>
  <input type="text" placeholder="Telephone" onChange={updatTelephone} class="input input-bordered w-full " />
  <label class="label">
  </label>
</div>
<label class="label">
    <span class="label-text">Contrat</span>   
  </label>
<select class="select select-bordered w-full " onChange={updatContrat}>
  <option disabled selected>Type of Contrat</option>
  <option>CDI</option>
  <option>CDD</option>
</select>
<button type='Submit' className='btn btn-info w-full mt-10 font-bold' onClick={Ajout}>Ajouter</button>
        </form>
       </div>
       <div className='flex-[0.7] p-10'>
       <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>Nom</th>
        <th>Prenom</th>
        <th>Email</th>
        <th>Telephone</th>
        <th>Contrat</th>
      </tr>
    </thead>
    <tbody>
        {
            employees.map(e=>
                <tr>
                    <td>{e.nom}</td>
                    <td>{e.prenom}</td>
                    <td>{e.email}</td>
                    <td>{e.telephone}</td>
                    <td>{e.contrat}</td>
                </tr>)
        }
     
     
    </tbody>
  </table>
</div>
       </div>
    </div>
    </div>
  )
}

export default Contra