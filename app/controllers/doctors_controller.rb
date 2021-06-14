class DoctorsController < ApplicationController
  before_action :set_doc, only: [:show, :edit, :update, :destroy]

  def index
    @drs = Doctor.all
    render component: 'Doctors', props: { doctors: @drs }
  end

  def show
    render component: 'Doctor', props: { doctors: @dr, doctor_name: @dr.dr_name }
  end

  def new
    @dr = Doctor.new
    render component: 'DoctorNew', props: { doctors: @dr }
  end

  def create
    @dr = Doctor.new(dr_params)

    if @dr.save
      redirect_to @dr
    else
      render component: 'DoctorNew', props: { doctors: @dr }
    end
  end

  def edit
    render component: 'DoctorEdit', props: { doctors: @dr }
  end

  def update
    if @dr.update(dr_params)
      redirect_to @dr
    else
      render component: 'DoctorEdit', props: { doctors: @dr }
    end
  end

  def destroy
    @dr.destroy
    redirect_to doctors_path
  end

  private
    def set_doc
      @dr = Doctor.find(params[:id])
    end

    def dr_params
      params.require(:doctor).permit(:first_name, :last_name)
    end
end
