from django.contrib import admin
from .models import Register

# Register your models here.
#admin.site.register(Register)


@admin.register(Register)
class registerAdmin(admin.ModelAdmin):
      list_display = ('fullname', 'email', 'phonenumber', 'ticketnumber', 'time')
      ordering = ('fullname',)
      search_fields = ('email',)