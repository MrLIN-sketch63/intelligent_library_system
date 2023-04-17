from django import template

register = template.Library()


@register.filter
def list_length(lst):
    return len(lst)
