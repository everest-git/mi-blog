<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Usuario_model extends CI_Model {

	public function __construct()
	{
		parent::__construct();
		//Do your magic here
	}

	public function get_by_id($id)
	{
		$sql = "Select * from users where id = ?";
		return $this->db->query($sql, array($id))->row();
	}

	public function get_all() 
	{
		$data = $this->db->get('users');
		return $data->result();
	}
	

}

/* End of file Usuario_model.php */
/* Location: ./application/models/Usuario_model.php */