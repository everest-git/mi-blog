<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Usuario extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		//Do your magic here
		$this->load->model('Usuario_model');
	}
	public function index()
	{
		$this->load->view('admin/header');
		$this->load->view('usuario/index_view');
		$this->load->view('admin/footer');
	}

	public function details()
	{
		if ($this->input->is_ajax_request()) {
			$data = $this->Usuario_model->get_by_id(1);

			//$data = array('apple', 'orange');
			echo json_encode($data);
		}
	}

	public function get_users() 
	{
		if ($this->input->is_ajax_request()) {
			echo json_encode($this->Usuario_model->get_all());
		}
	}

}

/* End of file Usuario.php */
/* Location: ./application/controllers/Usuario.php */