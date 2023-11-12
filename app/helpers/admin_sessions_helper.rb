module AdminSessionsHelper
    def admin_log_in(admin)
        session[:admin_id] = admin.id
    end

    def current_admin
        if session[:admin_id]
          @current_admin ||= Admin.find_by(id: session[:admin_id])
        end
    end

    def current_admin?(admin)
        admin == current_admin
    end

    def admin_logged_in?
        !current_admin.nil?
    end
    
    def admin_log_out
        session.delete(:admin_id)
        @current_admin = nil
    end
end
