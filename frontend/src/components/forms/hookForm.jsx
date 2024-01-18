import React from 'react';
import { useRouter } from "next/navigation"
import { useForm, useFieldArray } from 'react-hook-form';
import { useSession } from "next-auth/react"
import { setPicks } from "api"


export default function DynamicForm({officialScoreData, userScoreData, week}) {
  // console.log(userScoreData)
  const router = useRouter()
    
    const { data: session, status } = useSession()
    // console.log(session)
    const { register, control, handleSubmit, setValue, watch } = useForm({
        defaultValues: {
          formData: [{ v: 0, h: 0}],
        },
      });


    const { fields, append, remove } = useFieldArray({
        control,
        name: 'formData',
      });
    
      const onSubmit = async (data) => {
        let isErrorFree = true;
        
        data.formData.map((item)=>{
          if((item.v && !item.h ) || (!item.v && item.h ) ){
            alert("Both Visitors and Home scores are required")
            isErrorFree = false
          }
          if(item.v > 99 || item.h > 99 ){
            alert("Scores cannot be more than 99.  I mean, c'mon, what are the odds!")
            isErrorFree = false
          }
        });
        
        if(!isErrorFree){
          alert("Double check your scores, something wasn't filled out correectly.")
          return
        }
        // console.log(data);
        const acToken = session.accessToken
        const userId = session.user.id

        const res = await setPicks(data, acToken, userId, week); 
        if (res.status === 200) {
          router.refresh()
          router.push('/dashboard') 
        } 
      };


      const score = officialScoreData.filter((w)=> {
        return w.week == week
      }); 

      const uscore = userScoreData.filter((w)=> {
        return w.week == week
      }); 

    console.log(uscore)
    // router.refresh()

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="picksTable">
            <table>
                <thead>
                    <tr>
                        {score.map((field, index) => (
                            <th className="scoresTableHeader" key={index}>

                            <label htmlFor="name" className="form-label">{field.visitor} </label>  
                            <input
                                {...register(`formData.${index}.v`)}
                                placeholder="Visitors"
                                defaultValue={uscore[index] ? uscore[index].v_score : field.index }
                                onChange={(e) => setValue(`formData.${index}.v`, e.target.value)}
                                disabled= {uscore[index] ? uscore[index].locked : 0}
                            />
                            <br /> @ <br /> 
                            <label htmlFor="name" className="form-label">{field.home} </label>
                            <input
                                {...register(`formData.${index}.h`)}
                                placeholder="Home"
                                defaultValue={uscore[index] ? uscore[index].h_score : field.index }
                                onChange={(e) => setValue(`formData.${index}.h`, e.target.value)}
                                disabled= {uscore[index] ? uscore[index].locked : 0}
                            />
                            </th>
                        ))}
                </tr>
                    </thead>
            </table>
            </div>
          <button type="submit" className="btn btn-primary submit" >Submit</button>
        </form>
      );
}