<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Helloworld extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		//Do your magic here
	}

	public function index()
	{
		$this->load->view('helloworld/index');
	}

	public function anyAction() 
	{
		$this->load->view('helloworld/anyaction');
	}

	public function withParams($param, $param2)
	{
		$data = array('param' => $param, 
					  'param2' => $param2);
		$this->load->view('helloworld/withparams', $data);
	}

}

/* End of file Helloworld.php */
/* Location: ./application/controllers/Helloworld.php */