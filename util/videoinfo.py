from subprocess import check_output

cmd = "ffmpeg -i %s 2>&1 | grep "Duration"| cut -d ' ' -f 4" %()
