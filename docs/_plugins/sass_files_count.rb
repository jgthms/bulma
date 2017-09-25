module Jekyll
  module Bulma
    # A Jekyll Tag type that renders the count of Bulma Sass files.
    # 
    # It works by reading Bulma's primary Sass file `bulma.sass`
    # from the `git` repository.
    #
		class SassFilesCount < Liquid::Tag
			def render(context)
			
				# bulma primary sass file
				file = '../bulma1.sass'
				
				if !File.readable?(file)
				
					# sort of a fallback in case the primary bulma file 
					# doesn't exist or is unreadable
					return 40
					
				end
					
				# ----------------------------------------------------------------------
				
				# initiate counter
				count = 0
				
				File.readlines(file).each do |line|
				
					# only interested in imported sass files
					next if !line.start_with? '@import'
					
					# remove @import, double quotes and trim it
					file = line.gsub('@import ', '').gsub(/\A"+(.*?)"+\Z/m, '\1').strip
					file = "../#{file}.sass"
				
					# make sure it's readable
					next if !File.readable?(file)
					
					File.readlines(file).each do |sub_line|
				
						# skip anything that's not an imported file
						next if !sub_line.start_with? '@import'
						
						# increase count
						count += 1
				
					end
					
				end
					
				# ----------------------------------------------------------------------
				
				# return counted files
				count

			end
		end
	end
end

Liquid::Template.register_tag('sass_files_count', Jekyll::Bulma::SassFilesCount)