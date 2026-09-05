import os
from django.http import HttpResponse, FileResponse, Http404

def index(request):
    """
    Serves the static/React built index.html page for Django runserver compatibility.
    """
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    
    # Check if built dist index.html exists, fallback to root index.html
    dist_index = os.path.join(base_dir, 'dist', 'index.html')
    root_index = os.path.join(base_dir, 'index.html')
    
    target_file = dist_index if os.path.exists(dist_index) else root_index
    
    if os.path.exists(target_file):
        with open(target_file, 'r', encoding='utf-8') as f:
            return HttpResponse(f.read(), content_type='text/html')
    return HttpResponse("<h1>Shreya Gupta Portfolio - Run 'npm run dev' or 'npm run build'</h1>")
