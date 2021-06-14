class AppointmentController < ApplicationController
  before_action :set_doc
  before_action :set_appoint, only: [:show, :edit, :update, :destroy]

  def index
    @stranges = @dr.appointments.where(speciality: 'strange')
    @peds = @dr.appointments.where(speciality: 'pediatrics')
    @fams = @dr.appointments.where(speciality: 'family medicine')
    render component: 'Appointments', props: { stranges: @stranges, peds: @peds, fams: @fams, doctor: @dr, users: User.all }
  end

  def show
    @user = User.find(@appointment.user_id)
    render component: 'Appointment', props: { appt: @appointment, user: @user }
  end

  def new
    @users = User.all - @dr.users
    @appointment = @dr.appointments.new
    render component: 'AppointmentNew', props: { appt: @appointment, users: @users }
  end

  def create
    @appointment = @dr.appointments.new(appointment_params)
    if @appointment.save
      redirect_to doctor_appointments_path(@dr)
    else
      render component: 'AppointmentNew', props: { appt: @appointment, users: @users }
    end
  end

  def edit 
    @users = User.all - @dr.users
    render component: 'AppointmentEdit', props: { appt: @appointment, users: @users }
  end

  def update
    if @appointment.update(appointment_params)
      redirect_to doctor_appointments_path(@dr)
    else
      render component: 'AppointmentEdit', props: { appt: @appointment, users: @users }
    end
  end

  def destroy
    @appointment.destroy
    redirect_to doctor_appointments_path(@dr)
  end

  private
    def set_appoint
      @appointment = @dr.appointments.find(params[:id])
    end

    def set_doc
      @dr = Doctor.find(params[:doctor_id])
    end

    def appointment_params
      params.require(:appointment).permit(:speciality, :doctor_id, :time)
    end
end