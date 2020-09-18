from django.contrib import admin
from .models import User


# Register your models here.
#admin.site.register(user)


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
      list_display = ('firstname', 'lastname', 'address', 'city', 'phonenumber', 'email')
      ordering = ('firstname',)
      search_fields = ('firstname', 'address')
