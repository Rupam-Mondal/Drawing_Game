import express from 'express';
import { CodeController } from '../Controller/CodeController.js';

const CodeGeneratorRouter = express();

CodeGeneratorRouter.get('/code' , CodeController);

export default CodeGeneratorRouter;