#include <stdlib.h>
#include <stdio.h>
#include <Python.h>
/**
 * print_python_list_info -  function that prints some basic
 *
 * @p: python list
 */
void print_python_list_info(PyObject *p)
{
	Py_ssize_t elem;

	printf("[*] Size of the Pythin List = %zd\n", Py_SIZE(p));
	printf("[*] Allocated = %zd\n", ((PyListObject *)p)->allocated);

	for (elem = 0; elem < Py_SIZE(p); elem++)
	{
		printf("Element %zd: ", elem);

		PyObject *item = PyList_GetItem(p, elem);

		if (item != NULL)
			printf("%s\n", Py_TYPE(item)->tp_name);
		else
			printf("Failed to retrieve the element\n");
	}
}
