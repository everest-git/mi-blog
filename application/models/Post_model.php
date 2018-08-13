<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Post_model extends CI_Model {

	public function __construct()
	{
		parent::__construct();
		//Do your magic here
	}

	public function getAll()
	{
		//$sql = "Select * from posts";
		//return $this->db->query($sql);
		return $this->db->get('posts')->result();
	}

	public function get($id)
	{
		$sql = "Select * from posts where id = ?";
		return $this->db->query($sql, array($id))->row();
	}


}

/* End of file Post_model.php */
/* Location: ./application/models/Post_model.php */