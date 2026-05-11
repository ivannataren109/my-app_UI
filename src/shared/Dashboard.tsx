import React, {useState, useMemo } from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';






const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: (theme.vars ?? theme).palette.text.secondary,
      ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
      }),
    }));

export type TSkillItem = {
    id: number,
    category: string,
    name: string,
    proficiency_level: string
    };

export type dataProps = {
//   colors?: string[];
     skills: TSkillItem[]
     categoryList: string[],
     proficiency_level: string[]
    };






const Dashboard = ({skills = [], categoryList = [], proficiency_level = []} : dataProps) => {
// export const Dashboard = ({colors = []}: dataProps) => {

    const [skillsList, setSkillsList] = useState<TSkillItem[]>(skills);
    const [newSkillName, setNewSkillName] = useState<string>('');
    const [newCategory, setNewCategory] = useState<string>(categoryList[0]);
    const [newProficiency, setNewProficiency] = useState<string>(proficiency_level[0]);
    const [search, setSearch] = useState<string>('');
    const [category,setCategory] = useState<string>('');
    const [proficiency,setProficiency] = useState<string>('');

    const filteredSkills = useMemo(() => {
        return skillsList.filter((skill) =>{
            const matchesSearch = skill.name.toLowerCase().includes(search.toLowerCase()) || search.trim() === '';
            const matchesCategory = category === '' || skill.category === category;
            const matchesProficiency = proficiency === '' || skill.proficiency_level === proficiency;
            return matchesSearch && matchesCategory && matchesProficiency;
            });
        }, [skillsList, search, category, proficiency]);


    function handleAddSkill(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(newSkillName.trim().length === 0 || newCategory ==='' || newProficiency ==='') {
            return; }

        console.log("newSkillName.trim() is ", newSkillName.trim());
        const skillObject = {
                               id: skillsList.length + 1,
                               category: newCategory,
                               name: newSkillName,
                               proficiency_level: newProficiency
                            };

        setSkillsList(prevSkills => [...prevSkills, skillObject]);
        setNewSkillName('');
//         setNewCategory(categoryList[0]);
//         setNewProficiency(proficiency_level[0]);
        }

  return (
<>
    <Grid>
        <div className="filter-bar" style={{
                                            display: 'flex',
                                            justifyContent: 'center'
                                            }}
        >
           <input
                type="text"
                placeholder= "Filter skills..."
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
                />
           <select value={category} onChange={(e)=> setCategory(e.target.value)}>
            <option key='Category-All' value=''> All</option>
           {categoryList.map((cat:string)=>(
               <option key={cat} value={cat}>
                {cat}
               </option>
               ))}
           </select>
           <select value={proficiency} onChange={(e)=> setProficiency(e.target.value)}>
                       <option key='proficiency-All' value=''> All</option>
                      {proficiency_level.map((prof:string)=>(
                          <option key={prof} value={prof}>
                           {prof}
                          </option>
                          ))}
           </select>
        </div>

          <div
          style={{
                       display: 'flex',
                       justifyContent: 'center'
                       }}
          >
              <form onSubmit={handleAddSkill}>

                    <input placeholder= 'Add new Skill' value={newSkillName} onChange={(e) => setNewSkillName(e.target.value)}/>
                    <select value={newCategory} onChange={(e)=> setNewCategory(e.target.value)}>
                        {categoryList.map((cat:string)=>(
                                <option key={cat} value={cat}>
                            {cat}
                           </option>
                        ))}
                   </select>
                   <select value={newProficiency} onChange={(e)=> setNewProficiency(e.target.value)}>
                      {proficiency_level.map((prof:string)=>(
                          <option key={prof} value={prof}>
                           {prof}
                          </option>
                      ))}
                   </select>
                   <button type='submit'>Add To List</button>
              </form>
          </div>


            <hr/>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 10, md: 12 }}>
                                {filteredSkills?.map((item:TSkillItem ) => (<Grid key={item.id} size={2}>
                                                                   <Item>
                                                                   <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                                                        <h1> {item.name}</h1>
                                                                        <label>{item.category}</label>
                                                                        <label style={{ fontWeight: 'bold' }}> Proficiency Level: {item.proficiency_level}</label>
                                                                   </div>
                                                                   </Item>
                                                                 </Grid>))}
                </Grid>

    </Grid>
</>
  );
};

//export default exports Dashboard only
export default Dashboard;