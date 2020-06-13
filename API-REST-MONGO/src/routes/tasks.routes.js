import { Router } from 'express';
import app from '../server';
const router = Router();
import { connect } from '../database';
import { ObjectID } from 'mongodb'


router.get('/',async (req,res)=>{
    const db = await connect();

    const result = await db.collection('tasks').find({}).toArray();

    console.log(result)
    res.json(result);
    
    
})

router.post('/',async (req,res)=>{
    const db = await connect();
    console.log(req.body);

    const task = {
        title: req.body.title,
        argument: req.body.argument
    }
    const result = await db.collection('tasks').insert(task);
    res.json(result.ops[0]);
    res.send('Task created');   
});


router.get('/:id',async (req,res)=>{
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('tasks').findOne({ _id: ObjectID(id) });

    res.json(result);
})

router.delete('/:id', async(req, res ) => {
    const { id } = req.params;
    const db = await connect();
    await db.collection('tasks').deleteOne( {_id: ObjectID(id)} );
    res.json({
        message: `Task ${id} deleted`,
    })
})

router.put('/:id', async (req, res) =>{
    const { id } = req.params;
    const updateTaks = {
        title: req.body.title,
        argument: req.body.argument 
    };
    const db = await connect();
    const result = await db.collection('tasks').updateOne({_id : ObjectID( id )},{$set:updateTaks});
    res.json({
        result:`${result}`,
        message: `Task ${id} update`,
    })
})


export default router;