<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Post extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('Post_model');
	}

	public function index()
	{

		$this->load->view('admin/header');
		$this->load->view('post/index');
		$this->load->view('admin/footer');
	}

	public function carga_posts()
	{
		if($this->input->is_ajax_request())
		{
			$data = $this->Post_model->getAll();
			echo json_encode($data);		
		}
		else 
		{
			// Mandar llamar la pagina de error 404
			//index();
			show_404();
		}
		
	}

	public function get_post()
	{
		if($this->input->is_ajax_request())
		{
			$id_post = $this->input->post('id');
			$data = $this->Post_model->get_by_id($id_post);
			echo json_encode($data);		
		}
		else 
		{
			// Mandar llamar la pagina de error 404
			//index();
			show_404();
		}
	}

	public function details()
	{
		$this->load->view('admin/header');
		$this->load->view('post/details_view');
		$this->load->view('admin/footer');
	}

	public function edit($id)
	{

	}

	public function create()
	{

	}

	public function delete($id)
	{

	}

}

/* End of file Post.php */
/* Location: ./application/controllers/Post.php */