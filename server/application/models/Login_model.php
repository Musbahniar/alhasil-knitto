<?php

class Login_model extends CI_Model {
	
	function cek_user_login($email, $password){
         return  $this->db->query("SELECT * FROM tbl_login 
         						   WHERE c_Email = '".$email."' AND c_Password = '".$password."'")->result_array();
	}

	function ambilAja(){
         return  $this->db->query("SELECT * FROM tbl_login")->result_array();
	}

	function tesPanggil(){
		return "ADA";
	}
}
