import { pool } from "../db.js"


export const getEmployee = async (req, res) => {
    const [rows] = await pool.query('select * from employee')
    res.json(rows)
}

export const createEmployee = async (req, res) => {
    const { name, salary } = req.body
    const [rows] = await pool.query('INSERT INTO employee (name, salary) values (?, ?)', [name, salary]) 
    res.send({
        id: rows.insertId,
        name,
        salary
    })
}

export const updateEmployee = (req, res) => res.send('actualizando empleados')

export const deleteEmployee = (req, res) => res.send('eliminando empleados')
