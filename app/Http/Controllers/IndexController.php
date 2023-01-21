<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index() {
       // inertia dois obligatoirement etre dans /pages  puis on fais /nom_dossier/nom_fichier
        return inertia('Index/Index' ,
    
         [
            'message'=> 'hello inertia je suis kader'
         ]
);
    }
    public function show() {
      
        return inertia('Index/show');
    }
}
