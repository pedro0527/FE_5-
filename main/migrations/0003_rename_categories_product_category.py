# Generated by Django 5.0.4 on 2024-05-07 05:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_rename_category_product_categories'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='categories',
            new_name='category',
        ),
    ]