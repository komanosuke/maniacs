module ApplicationHelper
    def youtube_embed(youtube_url)
        if youtube_url[/youtu\.be\/([^\?]*)/]
          youtube_id = $1
        else
          # Regex to extract the YouTube ID
          youtube_url[/^.*((v\/)|(embed\/)|(watch\?))\??v?=?([^\&\?]*).*/]
          youtube_id = $5
        end
    
        %Q(<iframe width="100%" height="100%" src="https://www.youtube.com/embed/#{youtube_id}" frameborder="0" allowfullscreen></iframe>).html_safe
    end
end