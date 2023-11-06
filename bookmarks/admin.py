from django.contrib import admin
from .models import Bookmark

class BookmarkAdmin(admin.ModelAdmin):
    list_display = ('owner', 'post', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('owner__username', 'post__title')

admin.site.register(Bookmark, BookmarkAdmin)
