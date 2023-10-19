import React from 'react'
import 
{ BsFiletypeHtml, BsFiletypeScss, BsFiletypeJava, BsFiletypeSql}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Graph() {

    const data = [
        {
          name: 'Python',
          students: 4000,
          men: 2400,
          amt: 2400,
        },
        {
          name: 'C++',
          students: 3000,
          men: 1398,
          amt: 2210,
        },
        {
          name: 'Ruby',
          students: 2000,
          men: 9800,
          amt: 2290,
        },
        {
          name: 'Django',
          students: 2780,
          men: 3908,
          amt: 2000,
        },
        {
          name: 'JS',
          students: 1890,
          men: 4800,
          amt: 2181,
        },
        {
          name: 'Java',
          students: 2390,
          men: 3800,
          amt: 2500,
        },
        {
          name: 'OS',
          students: 3490,
          men: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>Tutorial</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>HTML</h3>
                    <BsFiletypeHtml className='card_icon'/>
                </div>
                <h1>10$</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CSS</h3>
                    <BsFiletypeScss className='card_icon'/>
                </div>
                <h1>12$</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>JAVA</h3>
                    <BsFiletypeJava className='card_icon'/>
                </div>
                <h1>30$</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>SQL</h3>
                    <BsFiletypeSql className='card_icon'/>
                </div>
                <h1>42$</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="men" fill="#8884d8" />
                <Bar dataKey="students" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="men" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="students" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Graph